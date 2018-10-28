# GameTools

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.2.3.

## GitHub Pages

https://kmodan5.github.io/game-tools/

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

### To GitHub Build

1. 公開用に新規ブランチを作成する。ブランチ名に迷ったらgh-pages。

1. GitHub Pagesの設定から取得できるURLを指定してビルドする。URLはリポジトリによって異なるので注意。
```
 ng build --prod --base-href https://kmodan5.github.io/my-angular-test/
```

1. \distディレクトリの配下からindex.htmlが存在するフォルダを探し、フォルダの中身を公開用ブランチにプッシュする。

1. GitHub PagesのSourceを公開用ブランチに変更する。

1. GitHub PagesのURLにアクセスして期待した内容が表示されたら完了。Sourceの反映に5分ほどかかる場合もあるので注意。

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
