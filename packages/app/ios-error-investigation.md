# iOS起動エラー調査ログ

## エラー内容
```
ERROR  [runtime not ready]: TypeError: 0, _resolveAssetSource.setCustomSourceTransformer is not a function (it is undefined), js engine: hermes
ERROR  [runtime not ready]: Invariant Violation: "main" has not been registered. This can happen if:
* Metro (the local dev server) is run from the wrong folder. Check if Metro is running, stop it and restart it in the current project.
* A module failed to load due to an error and `AppRegistry.registerComponent` wasn't called., js engine: hermes
```

## 調査した内容

### 1. 依存関係の確認
- `@codynog/rn-ui@2025.6.7` を使用中
- 最初は`expo`がdependenciesに含まれていたが、devDependenciesに移動済み
- `expo install --check`で依存関係に問題なし
- peerDependenciesは全て満たされている

### 2. バージョン情報
- React Native: 0.79.2
- React: 19.0.0
- Expo: ~53.0.7
- @codynog/rn-ui: ^2025.6.8（最新版にアップデート済み）

### 3. 試した解決策
1. **キャッシュクリア**
   - node_modules削除
   - package-lock.json削除
   - npm cache clean --force
   - 再インストール

2. **metro.config.js設定**
   - 最初は空だった
   - monorepo対応の設定を追加
   - watchFoldersとnodeModulesPathsを設定
   - カスタムresolveRequestを試したが、最終的にシンプルな設定に戻した

3. **@codynog/rn-uiの修正**
   - expoをdependenciesからdevDependenciesに移動
   - バージョンを最新に更新

### 4. 別のエラー
Metro設定を複雑にした際に以下のエラーも発生：
```
ERROR  Error: Failed to get the SHA-1 for: /Users/noguchi.kohki/Documents/JS/rn-template/packages/shared/libs/i18n/index.ts
```

## 現在の状況
- Webでは起動する（expo-fontでエラーは出るが）
- iOSでは依然として`_resolveAssetSource.setCustomSourceTransformer`エラーが発生
- metro.config.jsをシンプルな設定に戻した状態

## 次に調査すべきこと
1. React Native 0.79.2での`_resolveAssetSource`の変更点
2. Hermesエンジンとの互換性
3. expo-routerのエントリーポイントの問題
4. newArchEnabled: trueの影響