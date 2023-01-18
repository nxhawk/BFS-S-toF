var S = -1;
var F = -1;
var R = "W";
var mutilChoice = false;

var mutil = document.getElementById("mutil");
var table = document.getElementById("table");
const SZ_COL = parseInt(
  getComputedStyle(document.documentElement).getPropertyValue("--NCOL", 10)
);
const SZ_ROW = 24;

/*
 * -1: off
 *  1: on
 * 0: from
 * 2: to
 */
var board = new Array(SZ_ROW * SZ_COL).fill(-1);

const _index = (idx) => {
  let x = Math.floor(idx / SZ_COL);
  let y = idx - x * SZ_COL;
  return { x, y };
};
