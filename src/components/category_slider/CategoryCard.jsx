import styels from './CategorySlider.module.css'

export const CategoryCard = (props) => {
  return (
    <>
    <div className={styels.category_box}>
        <div className={`${styels.cateImage}`}>
            <img src={props.cate.img} width="100%" alt="Category" />
        </div>
        <h5 className='text-center'>{props.cate.title}</h5>
    </div>
    </>
  )
}
