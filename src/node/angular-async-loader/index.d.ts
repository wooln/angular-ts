
declare var asyncLoader: asyncLoader.IDefine;

export as namespace asyncLoader;

// Support AMD require
export = asyncLoader;

declare namespace asyncLoader {

    interface IDefine {
        configure(module: any);
    }
}
