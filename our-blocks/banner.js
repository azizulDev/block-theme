import {InnerBlocks} from "@wordpress/block-editor";

wp.blocks.registerBlockType("block-theme/banner", {
    title: "Banner",
    supports: {
      align: ["full"]
    },
    attributes: {
      align: { type: "string", default: "full" }
    },
    edit: EditComponent,
    save: SaveComponent
  })
  
  function EditComponent() {
    const useMeLater = (
        <>
            <div>
                <h1>Banner Title</h1>
                <p>Lorem ipsum banner description</p>
                <button>Go Button</button>
            </div>
        </>
    )

    return (
      <div className="page-banner" style={{backgroundColor: '#ddd', padding: '50px 10px'}}>
        <InnerBlocks allowedBlocks={["block-theme/heading"]} />
      </div>
    )
  }
  
  function SaveComponent() {
    return (
        <div className="page-banner" style={{backgroundColor: '#ddd', padding: '50px 10px'}}>
            <InnerBlocks.Content />
        </div>
    )
  }
  