public class UserService : IUserService
{
    private static List<User> _users = new();

    public List<User> GetUsers()
    {
        return _users;
    }

    public void AddUser(User user)
    {
        _users.Add(user);
    }
}
