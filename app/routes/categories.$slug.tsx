import { useParams } from "@remix-run/react"

export default function Category() {
  const params = useParams();
  return (
    <div>Categoryid is {params.slug}</div>
  )
}
