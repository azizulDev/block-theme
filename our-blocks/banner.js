wp.blocks.registerBlockType("block-theme/banner", {
    title: "Banner",
    edit: EditComponent,
    save: SaveComponent
  })
  
  function EditComponent() {
    return (
      <div className="page-banner">
        <h1>Banner Title</h1>
        <p>Lorem ipsum banner description</p>
        <button>Go Button</button>
      </div>
    )
  }
  
  function SaveComponent() {
    return <p>This is from our block.</p>
  }
  