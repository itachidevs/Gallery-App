import './index.css'

const ThumbnailItem = props => {
  const {isActive, itemDetails, clickTabItem} = props
  const {thumbnailUrl, thumbnailAltText, id} = itemDetails
  const onClicking = () => {
    console.log(id)
    clickTabItem(id)
  }
  const activeTabClassname = isActive ? 'active' : ''
  return (
    <li className="thumbphoto">
      <button type="button" className="btn" onClick={onClicking}>
        <img
          className={`thumbnail ${activeTabClassname}`}
          src={thumbnailUrl}
          alt={thumbnailAltText}
        />
      </button>
    </li>
  )
}
export default ThumbnailItem
