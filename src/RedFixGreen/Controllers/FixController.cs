using Microsoft.AspNetCore.Mvc;

namespace RedFixGreen.Controllers
{
    public class FixController : Controller
    {
        // GET: /<controller>/
        public IActionResult Index()
        {
            return View();
        }
    }
}
