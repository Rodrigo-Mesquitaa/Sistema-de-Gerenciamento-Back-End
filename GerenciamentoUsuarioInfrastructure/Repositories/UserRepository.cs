using GerenciamentoUsuarioDomain.Interfaces;
using GerenciamentoUsuarioDomain.Entities;

namespace GerenciamentoUsuarioInfrastructure.Repositories
{
    public class UserRepository : IUserRepository
    {
        private readonly List<User> _users = new();

        public IEnumerable<User> GetAll() => _users;

        public User GetById(int id) => _users.FirstOrDefault(u => u.Id == id);

        public void Add(User user)
        {
            user.Id = _users.Count + 1;
            _users.Add(user);
        }

        public void Update(User user)
        {
            var existingUser = GetById(user.Id);
            if (existingUser != null)
            {
                existingUser.Name = user.Name;
                existingUser.Email = user.Email;
                existingUser.Phone = user.Phone;
            }
        }

        public void Delete(int id) => _users.RemoveAll(u => u.Id == id);
    }
}