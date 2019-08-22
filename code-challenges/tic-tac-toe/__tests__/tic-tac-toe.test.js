'use strict';

const tWinner = require('../tic-tac-toe');

describe('Tic-tac-toe winner finder', () => {
  test('Finds diagonal winner', () => {
    const board = [
      ['o', 'x', 'o'],
      ['x', 'o', 'x'],
      ['x', 'x', 'o']];
    const board2 = [
      ['o', 'x', 'o'],
      ['x', 'o', 'x'],
      ['o', 'x', 'x']];
    expect(tWinner(board)).toEqual('o');
    expect(tWinner(board2)).toEqual('o');
  });

  test('Finds horizontal winner', () => {
    const board = [
      ['o', 'x', 'o'],
      ['x', 'x', 'x'],
      ['x', 'o', 'o']];
    const board2 = [
      ['o', 'x', 'o'],
      [' ', 'o', 'x'],
      ['x', 'x', 'x']];
    expect(tWinner(board)).toEqual('x');
    expect(tWinner(board2)).toEqual('x');
  });

  test('Finds vertical winner', () => {
    const board = [
      ['o', 'x', 'o'],
      ['x', 'x', 'x'],
      ['o', 'x', 'o']];
    const board2 = [
      ['x', 'x', 'o'],
      [' ', 'o', 'o'],
      ['x', 'x', 'o']];
    expect(tWinner(board)).toEqual('x');
    expect(tWinner(board2)).toEqual('o');
  });

  test('Returns none if did not find a winner', () => {
    const board = [
      ['o', 'x', 'o'],
      ['x', ' ', 'x'],
      ['o', 'x', 'o']];
    const board2 = [
      ['x', 'x', 'o'],
      [' ', 'o', 'x'],
      ['x', 'x', 'o']];
    expect(tWinner(board)).toEqual('none');
    expect(tWinner(board2)).toEqual('none');
  });
});