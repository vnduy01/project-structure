import Sandal from "./sandal";

export default class Factory {
    factory (raw) {
        const sandal       = new Sandal(raw.code, raw.style, raw.branch, raw.size, raw.color);
        sandal.description = raw.description;
        return sandal;
    }
}
