"use client";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons/faArrowLeft";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons/faArrowRight";
import { faArrowTurnDown } from "@fortawesome/free-solid-svg-icons/faArrowTurnDown";
import { faArrowTurnUp } from "@fortawesome/free-solid-svg-icons/faArrowTurnUp";
import { faBold } from "@fortawesome/free-solid-svg-icons/faBold";
import { faHeading } from "@fortawesome/free-solid-svg-icons/faHeading";
import { faImage } from "@fortawesome/free-solid-svg-icons/faImage";
import { faItalic } from "@fortawesome/free-solid-svg-icons/faItalic";
import { faLink } from "@fortawesome/free-solid-svg-icons/faLink";
import { faListUl } from "@fortawesome/free-solid-svg-icons/faListUl";
import { faPaintbrush } from "@fortawesome/free-solid-svg-icons/faPaintbrush";
import { faStrikethrough } from "@fortawesome/free-solid-svg-icons/faStrikethrough";
import { faTable } from "@fortawesome/free-solid-svg-icons/faTable";
import { faUnlink } from "@fortawesome/free-solid-svg-icons/faUnlink";
import { faXmark } from "@fortawesome/free-solid-svg-icons/faXmark";
import { faXmarksLines } from "@fortawesome/free-solid-svg-icons/faXmarksLines";
import ActionButton from "@omer-x/bs-ui-kit/ActionButton";
import Input from "@omer-x/bs-ui-kit/form/Input";
import { useTheme } from "@omer-x/bs-ui-kit/hooks";
import { Image } from "@tiptap/extension-image";
import { Table, TableCell, TableHeader, TableRow } from "@tiptap/extension-table";
import { TextStyleKit } from "@tiptap/extension-text-style";
import { EditorContent, useEditor } from "@tiptap/react";
import { BubbleMenu, FloatingMenu } from "@tiptap/react/menus";
import { StarterKit } from "@tiptap/starter-kit";
import classNames from "classnames";
import { useEffect, useRef } from "react";
import Card from "react-bootstrap/Card";
import CardBody from "react-bootstrap/CardBody";
import styles from "~/styles/rich-content.module.scss";

type RichTextEditorProps = {
  name: string,
  defaultValue?: string,
};

const RichTextEditor = ({
  name,
  defaultValue = "",
}: RichTextEditorProps) => {
  const theme = useTheme();
  const imageInputRef = useRef<HTMLInputElement>(null);

  const editor = useEditor({
    extensions: [
      StarterKit.configure({
        link: {
          openOnClick: false,
        },
      }),
      TextStyleKit,
      Table.configure({ resizable: false }),
      TableRow,
      TableHeader,
      TableCell,
      Image,
    ],
    content: defaultValue,
    immediatelyRender: false,
    editorProps: {
      attributes: {
        class: classNames("form-control", styles.richContent),
      },
    },
  });

  useEffect(() => {
    if (!editor) return;
    editor.commands.setContent(defaultValue);
  }, [editor, defaultValue]);

  if (!editor) return <Input name={name} readOnly />;

  const showFileBrowser = () => {
    if (!imageInputRef.current) return;
    const imageInput = imageInputRef.current;
    imageInput.click();
  };

  const addImage = async (e: React.ChangeEvent<HTMLInputElement>) => {
    // ...
  };

  return (
    <>
      <input type="hidden" name={name} value={editor.getHTML()} />
      <BubbleMenu editor={editor} options={{ offset: 6, placement: "top-start" }}>
        <Card>
          <CardBody className="p-1 d-flex gap-1">
            {editor.getAttributes("link").href ? (
              <ActionButton
                icon={faUnlink}
                size="sm"
                onClick={() => editor.chain().focus().unsetLink().run()}
                variant="outline-danger"
              />
            ) : (
              <ActionButton
                icon={faLink}
                size="sm"
                onClick={() => {
                  const input = prompt("Enter URL");
                  if (!input) return;
                  return editor.chain().focus().setLink({ href: input }).run();
                }}
                variant="outline-success"
              />
            )}
            <ActionButton
              icon={faBold}
              size="sm"
              onClick={() => editor.chain().focus().toggleBold().run()}
              variant={editor.isActive("bold") ? "primary" : "secondary"}
            />
            <ActionButton
              icon={faItalic}
              size="sm"
              onClick={() => editor.chain().focus().toggleItalic().run()}
              variant={editor.isActive("italic") ? "primary" : "secondary"}
            />
            <ActionButton
              icon={faStrikethrough}
              size="sm"
              onClick={() => editor.chain().focus().toggleStrike().run()}
              variant={editor.isActive("strike") ? "primary" : "secondary"}
            />
            <ActionButton
              icon={faPaintbrush}
              size="sm"
              onClick={() => editor.chain().focus().setColor("#DC3546").run()}
              variant={theme === "dark" ? "dark" : "light"}
              className={classNames("text-danger", {
                "border border-primary": editor.isActive("textStyle", { color: "#DC3546" }),
              })}
            />
            <ActionButton
              icon={faPaintbrush}
              size="sm"
              onClick={() => editor.chain().focus().setColor("#0D6DFD").run()}
              variant={theme === "dark" ? "dark" : "light"}
              className={classNames("text-primary", {
                "border border-primary": editor.isActive("textStyle", { color: "#0D6DFD" }),
              })}
            />
            <ActionButton
              icon={faPaintbrush}
              size="sm"
              onClick={() => editor.chain().focus().unsetColor().run()}
              variant={theme === "dark" ? "dark" : "light"}
              className={classNames({
                "text-light": theme === "dark",
                "text-dark": theme === "light",
                "border border-primary": !editor.isActive("textStyle"),
              })}
            />
          </CardBody>
        </Card>
      </BubbleMenu>
      <FloatingMenu editor={editor}>
        <Card>
          <CardBody className="p-1 d-flex gap-1">
            <ActionButton
              icon={faHeading}
              size="sm"
              onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
              variant={editor.isActive("heading", { level: 1 }) ? "primary" : "secondary"}
            />
            <ActionButton
              icon={faHeading}
              size="sm"
              onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
              variant={editor.isActive("heading", { level: 2 }) ? "primary" : "secondary"}
            />
            <ActionButton
              icon={faHeading}
              size="sm"
              onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
              variant={editor.isActive("heading", { level: 2 }) ? "primary" : "secondary"}
            />
            <ActionButton
              icon={faListUl}
              size="sm"
              onClick={() => editor.chain().focus().toggleBulletList().run()}
              variant={editor.isActive("bulletList") ? "primary" : "secondary"}
            />
            <ActionButton
              icon={faTable}
              size="sm"
              onClick={() => editor.chain().focus().insertTable({ rows: 2, cols: 2 }).run()}
              variant="secondary"
            />
            <ActionButton
              icon={faImage}
              size="sm"
              onClick={showFileBrowser}
              variant="secondary"
            />
          </CardBody>
        </Card>
      </FloatingMenu>
      <BubbleMenu
        editor={editor}
        options={{ offset: 6, placement: "top-start" }}
        shouldShow={({ editor: e }) => e.isActive("table")}
      >
        <Card>
          <CardBody className="p-1 d-flex gap-1">
            <ActionButton
              icon={faArrowTurnDown}
              size="sm"
              onClick={() => editor.chain().focus().addRowAfter().run()}
              variant="outline-primary"
            />
            <ActionButton
              icon={faArrowTurnUp}
              size="sm"
              onClick={() => editor.chain().focus().addRowBefore().run()}
              variant="outline-primary"
            />
            <ActionButton
              icon={faArrowLeft}
              size="sm"
              onClick={() => editor.chain().focus().addColumnBefore().run()}
              variant="outline-primary"
            />
            <ActionButton
              icon={faArrowRight}
              size="sm"
              onClick={() => editor.chain().focus().addColumnAfter().run()}
              variant="outline-primary"
            />
            <ActionButton
              icon={faXmark}
              size="sm"
              onClick={() => editor.chain().focus().deleteColumn().run()}
              variant="outline-danger"
            />
            <ActionButton
              icon={faXmarksLines}
              size="sm"
              onClick={() => editor.chain().focus().deleteRow().run()}
              variant="outline-danger"
            />
          </CardBody>
        </Card>
      </BubbleMenu>
      <EditorContent editor={editor} />
      <input
        ref={imageInputRef}
        type="file"
        className="d-none"
        accept="image/*"
        onChange={addImage}
      />
    </>
  );
};

export default RichTextEditor;
