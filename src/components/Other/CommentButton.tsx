type Props = {
  onClick: (e: React.MouseEvent) => void;
}

export default function CommentButton({ onClick: handleOnClick }: Props) {
  return (
    <div className="col-lg-12">
      <div className="text-center align-items-center">
        <input className="submit" id="submit" name="submit" type="submit" value="Post Comment" onClick={handleOnClick} />
      </div>
    </div>
  )
}
