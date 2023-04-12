import {InnerBlocks} from "@wordpress/block-editor";

wp.blocks.registerBlockType("block-theme/heading", {
    title: "Heading",
    edit: EditComponent,
    save: SaveComponent
  })
  
  function EditComponent() {

    return (
      <div>This is a heading</div>
    )
  }
  
  function SaveComponent() {
    return (
        <div>Heading block output</div>
    )
  }
  