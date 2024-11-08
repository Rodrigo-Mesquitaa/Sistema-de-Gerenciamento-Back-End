using GerenciamentoUsuarioDomain.Interfaces;
using GerenciamentoUsuarioDomain.Entities;

namespace GerenciamentoUsuarioApplication.Services
{
    public class UserService
    {
        private readonly IUserRepository _repository;

        public UserService(IUserRepository repository)
        {
            _repository = repository;
        }

        public IEnumerable<User> GetUsers() => _repository.GetAll();

        public User GetUser(int id) => _repository.GetById(id);

        public void AddUser(User user) => _repository.Add(user);

        public void UpdateUser(User user) => _repository.Update(user);

        public void DeleteUser(int id) => _repository.Delete(id);
    }
}