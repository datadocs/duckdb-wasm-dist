export class FlagsInURL {
    readonly url: URL;

    mode: "coi" | "eh";
    readonly sharedWorker: boolean;
    readonly sharedWorkerSuffix: string;

    constructor(urlStr = location.href) {
        this.url = new URL(urlStr);
        const qs = this.url.searchParams;

        const mode = qs.get("mode");
        const sharedWorker = qs.get("shared");
        const suffix = qs.get("suffix");

        if (mode && mode.match(/^coi$/)) this.mode = "coi";
        else this.mode = "eh";

        this.sharedWorker = !!sharedWorker;
        this.sharedWorkerSuffix = suffix ?? "";
    }

    setSharedWorkerMode(enabled: boolean) {
        if (enabled === this.sharedWorker) return;
        const newURL = new URL(this.url);
        if (enabled) newURL.searchParams.set("shared", "1");
        else newURL.searchParams.delete("shared");
        location.href = newURL.toString();
    }

    overwriteMode(mode: "coi" | "eh") {
        this.mode = mode;
    }
    setMode(mode: "coi" | "eh") {
        const newURL = new URL(this.url);
        newURL.searchParams.set("mode", mode);
        location.href = newURL.toString();
    }
}
