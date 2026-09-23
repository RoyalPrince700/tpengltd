import { Link } from 'react-router-dom'

interface PageBannerProps {
  title: string
  crumb: string
  image: string
}

export default function PageBanner({ title, crumb, image }: PageBannerProps) {
  return (
    <div className="page-banner" style={{ backgroundImage: `url(${image})` }}>
      <div className="banner-inner">
        <div className="crumbs">
          <Link to="/">Home</Link>
          <span className="sep">›</span>
          <span>{crumb}</span>
        </div>
        <h1>{title}</h1>
      </div>
    </div>
  )
}
