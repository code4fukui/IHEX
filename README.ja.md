# IHEX

Intel HEXのシンプルなバイナリデコーダ

## デモ

```sh
deno -A https://code4fukui.github.io/IHEX/IHEX.js test.ihex test.bin
```

## 機能

- Intel HEXフォーマットのバイナリデータを解析し、バイナリファイルとして出力する

## 必要環境

- Deno

## 使い方

### インストール

```sh
deno install --global -A ihex2bin.js
```

### 実行

```sh
ihex2bin [fn.ihx] ([fn.bin])
```

## ライセンス

MIT License