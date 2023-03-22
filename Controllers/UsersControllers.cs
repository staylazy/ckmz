using Microsoft.AspNetCore.Mvc;

namespace ckmz.Controllers
{
    [Route("api/users")]
    [ApiController]
    public class UsersControllers : ControllerBase
    {
        [HttpGet]
        public IActionResult GetUsers()
        {
            var users = new[]
            {
                new { Name = "Oleg" },
                new { Name = "Ivan" }
            };

            return Ok(users);
        }
    }
}
