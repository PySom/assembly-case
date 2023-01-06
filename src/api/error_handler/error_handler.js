export const handleInvalidModel = (model) => {
    let build;
    if (model) {
        if (Array.isArray(model)) {
            build = model.reduce((aggregate, {message}) => {
                aggregate = aggregate.concat(message)
                return aggregate;
            }, []).join(' ')
        }
        else {
            build = Object.entries(model).reduce((aggregate, [key, value]) => {
                aggregate = aggregate.concat(value)
                return aggregate;
            }, []).join(' ')
        }
    }
    build = build && build.toString()
    return build;
}

export const handleError = (err, name) => {
    const { status, data } = typeof (err) === "object" && err.response;
    if (!status) {
        return "An unknown error occured at this time. Please try again";
    }
    if (status === 404) {
        return `${name || 'item'} not found in our logs.`;
    }
    else if (status === 500) {
        return "This is an issue from us. Please feel free to report this issue.";
    }
    else {
        const { errors, message } = data;
        if (errors) {
            return handleInvalidModel(errors)
        }
        if (message) {
            return message.toString();
        }
    }
}