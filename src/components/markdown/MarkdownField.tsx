import React from "react";
import "./styles.scss";

// this is how we'll interface with Payload itself
import { useFieldType } from "payload/components/forms";

// we'll re-use the built in Label component directly from Payload

// we can use existing Payload types easily
import { Props } from "payload/components/fields/Text";
import ReactMde from "react-mde";
import "react-mde/lib/styles/css/react-mde-all.css";
import * as Showdown from "showdown";

const MarkdownField: React.FC<Props> = (props) => {
  const { path, label, required } = props;

  const { value = "", setValue } = useFieldType<string>({
    path,
  });
  const [selectedTab, setSelectedTab] = React.useState<"write" | "preview">(
    "write"
  );

  const converter = new Showdown.Converter({
    tables: true,
    simplifiedAutoLink: true,
    strikethrough: true,
    tasklists: true,
  });

  return (
    <ReactMde
      value={value}
      onChange={setValue}
      selectedTab={selectedTab}
      onTabChange={setSelectedTab}
      generateMarkdownPreview={(markdown) =>
        Promise.resolve(converter.makeHtml(markdown))
      }
      childProps={{
        writeButton: {
          tabIndex: -1,
        },
      }}
    />
  );
};

export default MarkdownField;
