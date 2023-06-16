export function slugify(s) {
    return s
        .toLowerCase() // Convert the text to lowercase
        .replace(/\s+/g, '-') // Replace spaces with hyphens
        .replace(/[^\w-]+/g, '') // Remove non-word characters (excluding hyphens)
        .replace(/--+/g, '-') // Replace multiple consecutive hyphens with a single hyphen
        .trim();
}

export function wordCounter(s) {
    const wordCount = s.split(/\s+/).length; // Split text by whitespace and count the words
    const characterCountWithoutSpaces = s.replace(/\s+/g, '').length; // Remove spaces and count the characters
    const characterCountWithSpaces = s.length; // Count all characters including spaces
    const paragraphCount = s.split(/\n+/).length; // Split text by line breaks and count the paragraphs

    return [
        wordCount,
        characterCountWithoutSpaces,
        characterCountWithSpaces,
        paragraphCount,
    ];
}

export function caseConverter(s, param) {
    switch (param) {
        case "lowercase":
            s = s.toLowerCase();
            break;
        case "uppercase":
            s = s.toUpperCase();
            break;
        case "capitalize":
            let result = "";
            for (let i = 0; i < s.length; i++) {
                if ((i === 0 && s[i] !== " ") || (i - 1 >= 0 && s[i - 1] === " " && s[i] !== " ")) {
                    result += s[i].toUpperCase();
                } else {
                    result += s[i];
                }
            }
            s = result;
            break;
    }
    return s;
}

export function removeLineBreaks(s) {
    var lines = s.split(/\r\n|\r|\n/);
    for (var i = 0; i < lines.length; i++) {
        lines[i] = lines[i].trim();
    }
    return lines.join(' ');
}

export function generateLoremIpsum(type, number, includeHTML) {
    var loremIpsum = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus et ultricies ipsum. Morbi ut tortor auctor, gravida eros ac, ullamcorper nisl. Sed vitae nisi eget ligula feugiat auctor. Nullam vel ex ut nunc tristique tristique. Sed lobortis mi nec tortor pharetra, id aliquam sapien ultrices. Integer semper mi nec ipsum facilisis gravida. Mauris maximus erat sit amet feugiat ultricies. Nullam elementum consequat ex vel fringilla. Donec sodales vestibulum ipsum nec dapibus. Nam sagittis condimentum nisl, eu interdum enim pretium ut. Integer dignissim tortor sed ligula aliquam lobortis.";

    var result = "";
    if (type === "paragraphs") {
        for (var i = 0; i < number; i++) {
            if (includeHTML) {
                result += "<p>" + loremIpsum + "</p>";
            } else {
                result += loremIpsum;
            }
        }
    } else if (type === "sentences") {
        var sentences = loremIpsum.split(". ");
        for (var i = 0; i < number; i++) {
            result += sentences[i % sentences.length] + ". ";
        }
    } else if (type === "words") {
        var words = loremIpsum.split(" ");
        for (var i = 0; i < number; i++) {
            result += words[i % words.length] + " ";
        }
    } else if (type === "list items") {
        result += "<ul>";
        for (var i = 0; i < number; i++) {
            result += "<li>" + loremIpsum + "</li>";
        }
        result += "</ul>";
    }

    return result;
}
