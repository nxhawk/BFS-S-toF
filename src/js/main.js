_drawTable(SZ_ROW * SZ_COL);

mutil.addEventListener("click", () => {
  mutilChoice = !mutilChoice;
});

table.addEventListener("mousedown", () => {
  if (mutilChoice) R = "WZ";
});

table.addEventListener("mouseup", () => {
  if (mutilChoice) R = "W";
});

sq_ele = document.querySelectorAll(".sq");
sq_ele.forEach((sq, idx) => {
  sq.addEventListener("click", () => {
    if (R === "W") {
      sq.classList.toggle("on");
      board[idx] = -board[idx];
    } else if (R === "F") {
      sq.classList.remove("on");
      sq.classList.add("start");
      S = idx;
      board[idx] = 0;
      R = "W";
    } else if (R === "T") {
      sq.classList.remove("on");
      sq.classList.add("end");
      F = idx;
      board[idx] = 2;
      R = "W";
    }
  });
  sq.addEventListener("mouseover", () => {
    if (R === "WZ") {
      sq.classList.toggle("on");
      board[idx] = -board[idx];
    }
  });
});

f = document.getElementById("from");
t = document.getElementById("to");
btn = document.getElementById("btn");

f.addEventListener("click", () => {
  if (S != -1) return;
  R = "F";
  mutilChoice = false;
});

t.addEventListener("click", () => {
  if (F != -1) return;
  mutilChoice = false;
  R = "T";
});

btn.addEventListener("click", () => {
  R = "N";
  BFS(board, S, F);
});

const _through = (S) => {
  sq_ele[S].classList.remove("on");
  sq_ele[S].classList.add("now");
};

const sleep = (ms) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

let prev = new Array(SZ_COL * SZ_ROW + 5).fill(-1);
const _ok = (i, j, visit) => {
  if (i < 0 || j < 0 || i >= SZ_ROW || j >= SZ_COL) return false;
  else if (board[i * SZ_COL + j] === 1) return false;
  else if (visit[i * SZ_COL + j] !== -1) return false;
  return true;
};

const _count = (S) => {
  if (prev[S] == -1) return 0;
  return _count(prev[S]) + 1;
};

const trace = (S, i) => {
  if (prev[S] == -1) return;
  trace(prev[S], i - 1);
  setTimeout(() => {
    sq_ele[S].classList.remove("through");
    sq_ele[S].classList.add("path");
  }, 100 * i);
};

async function BFS(board, S, F) {
  let visit = new Array(SZ_COL * SZ_ROW + 5).fill(-1);
  let queue = [];
  queue.push(S);
  visit[S] = 1;

  while (queue.length > 0) {
    let sz = queue.length;
    while (sz--) {
      let u = queue.shift();
      sq_ele[u].classList.remove("now");
      sq_ele[u].classList.add("through");
      let { x, y } = _index(u);
      if (_ok(x - 1, y, visit)) {
        let T = (x - 1) * SZ_COL + y;
        queue.push(T);
        visit[T] = 1;
        prev[T] = u;
        if (T != S && T != F) _through(T);
        if (visit[F] == 1) break;
      }
      if (_ok(x, y - 1, visit)) {
        let T = x * SZ_COL + (y - 1);
        queue.push(T);
        visit[T] = 1;
        prev[T] = u;
        if (T != S && T != F) _through(T);
        if (visit[F] == 1) break;
      }
      if (_ok(x, y + 1, visit)) {
        let T = x * SZ_COL + y + 1;
        queue.push(T);
        visit[T] = 1;
        prev[T] = u;
        if (T != S && T != F) _through(T);
        if (visit[F] == 1) break;
      }
      if (_ok(x + 1, y, visit)) {
        let T = (x + 1) * SZ_COL + y;
        queue.push(T);
        visit[T] = 1;
        prev[T] = u;
        if (T != S && T != F) _through(T);
        if (visit[F] == 1) break;
      }
    }
    await sleep(100);
    if (visit[F] === 1) break;
  }
  if (visit[F] != 1) return;
  trace(F, _count(F));
}

document.getElementById("reset").addEventListener("click", () => {
  location.reload();
});
