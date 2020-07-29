/*
1插件的类型,可以是install方法并将Vue作为参数传入即可
    插件的类型,可以是install方法也可以是一个包含install方法对象
    插件只能被安装一次,保证插件列表不能有重复的插件
*/

Vue.use = function (plugin) {
    const installedPlugins =
        this._installedPlugins || (this._installedPlugins = []);
    if (installedPlugins.indexOf(plugin) > -1) {
        return this;
    }
    const args = toArray(arguments, 1);
    args.unshift(this);
    if (typeof plugin.install === "function") {
        plugin.install.apply(plugin, args);
    } else if (typeof plugin === "function") {
        plugin.apply(null, plugin, args);
    }
    installedPlugins.push(plugin);
    return this;
};
