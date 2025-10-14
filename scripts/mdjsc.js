const fs = require("fs");

function read_markdown(filename) {
  const data = fs.readFileSync(filename, "utf8");
  return data;
}

function read_markdowns(target_dir) {
  const files = fs.readdirSync(target_dir).filter((w) => w.endsWith(".md")).map((w) => read_markdown(target_dir + w));
  return files;
}

function html_content(prefix, tag, md) {
  let out = "";
  out += `<${tag}>`;
  out += md.replace(`/^${prefix}/`, "").trim();
  out += `</${tag}>`;
  return out;
}

function convert_markdown_to_html(content) {
  let out = "";
  for (const line of content.split("\n")) {
    if (line.startsWith("####")) {
      out += html_content("####", "h4", line) + "\n";
    } else if (line.startsWith("###")) {
      out += html_content("###", "h3", line) + "\n";
    } else if (line.startsWith("##")) {
      out += html_content("##", "h2", line) + "\n";
    } else if (line.startsWith("#")) {
      out += html_content("#", "h1", line) + "\n";
    }

  }
  return out;
}

function main() {
  const markdowns = read_markdowns("./posts/");
  for (const content of markdowns) {
    console.log(convert_markdown_to_html(content));
  }
}

main();

