interface Props {
  name?: string
}
export const Greet = ({ name }: Props) => {
  return <div>Hello {name}</div>
}
