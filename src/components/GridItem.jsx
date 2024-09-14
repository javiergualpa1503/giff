
export const GridItem = ({ title, url }) => {
  return (
    <div className="card">
      <img src={url} alt="" />
      <p>{title}</p>
    </div>
  )
}
