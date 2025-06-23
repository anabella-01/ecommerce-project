interface ImageThumbnailProps{
    selected:boolean;
    image:string;
    onClick: ()=> void;
    title:string;
    
}

const ImageThumbnail = ({selected,onClick, image,title}:ImageThumbnailProps) =>{
    return(

      <img
      src={image}
      alt={title}
      onClick={onClick}
      className={`size-16 object-contain rounded-[20px] cursor-pointer aspect-square
        ${selected? "ring-1 ring-black": ""}
        `}
       />
    )
}

export default ImageThumbnail;