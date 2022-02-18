import React, {Suspense} from 'react'
import { useImage } from 'react-image'
import PropTypes from 'prop-types'

// import  ClassNames  from 'classnames'
import ClassNames from './ImgCurrency.module.css'

const Image = ({
    src, alt, className, width, height, ...attrs
}) => {
    if (!src) {
        src = `../Chart/grivna.png/{width}*${height}`
    }
    

const classes = ClassNames(
    className,
    );

return (
    <img
        src={src}
        alt={alt}
        className={classes}
        width={width}
        height={height}
        {...attrs}
        />

)
}

Image.propTypes = {
    src: PropTypes.string,
    alt: PropTypes.string,
    className: PropTypes.string,
    width: PropTypes.number,
    height:PropTypes.number,
    
}

Image.defaultProps = {
    src:'',
        alt:'image name',
        className:'',
        width:100,
        height:100
    
}

export default Image;

// function MyImageComponent() {
//   const {src} = useImage({
//     srcList: '../Chart/grivna.png',
//   })
 
//   return <img src={src} />
// }
 
// export default function MyComponent() {
//   return (
//     <Suspense>
//       <MyImageComponent />
//     </Suspense>
//   )
// }