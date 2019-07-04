export default class Sandal {
    constructor (code, style, branch, size, color) {
        this.props = {
            code,
            style,
            branch,
            size,
            color
        };
    }

    get description () {
        return this.props.description;
    }

    set description (value) {
        this.props.description = value;
    }

    toJson () {
        return this.props;
    }
}
