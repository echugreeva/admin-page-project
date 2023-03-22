const UserCard = ({data}) => {
    return (
        <>
        <div>{data.username}</div>
        <div>{data.status}</div>
                <button>permission</button>
                <button>open</button>
                <button>reset password</button>
        </>
    )
}

export default UserCard