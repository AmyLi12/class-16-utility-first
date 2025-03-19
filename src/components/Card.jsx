export default function Card({ imgUri, title, children }) {

  return (
    <div className="w-xs rounded-lg bg-slate-200 p-4">
      <img src={imgUri} alt="" className="rounded-sm"/>

      <div>
        <h3>{title}</h3>
        <p>
          {children}
        </p>
      </div>
    </div>
  )
}
