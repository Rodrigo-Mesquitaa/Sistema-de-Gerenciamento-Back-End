using GerenciamentoUsuarioApplication.Services;
using GerenciamentoUsuarioDomain.Entities;
using Microsoft.AspNetCore.Mvc;

namespace GerenciamentoUsuarioAPI.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class UserController : ControllerBase
    {
        private readonly UserService _service;

        public UserController(UserService service)
        {
            _service = service;
        }

        [HttpGet]
        public IActionResult GetUsers() => Ok(_service.GetUsers());

        [HttpGet("{id}")]
        public IActionResult GetUser(int id)
        {
            var user = _service.GetUser(id);
            return user == null ? NotFound() : Ok(user);
        }

        [HttpPost]
        public IActionResult CreateUser(User user)
        {
            _service.AddUser(user);
            return CreatedAtAction(nameof(GetUser), new { id = user.Id }, user);
        }

        [HttpPut("{id}")]
        public IActionResult UpdateUser(int id, User user)
        {
            if (id != user.Id) return BadRequest();

            _service.UpdateUser(user);
            return NoContent();
        }

        [HttpDelete("{id}")]
        public IActionResult DeleteUser(int id)
        {
            _service.DeleteUser(id);
            return NoContent();
        }
    }
}