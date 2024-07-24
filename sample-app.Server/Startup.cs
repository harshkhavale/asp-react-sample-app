using Microsoft.EntityFrameworkCore;
using sample_app.Server.Data;

namespace sample_app.Server
{
    public class Startup
    {
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddCors();
            services.AddDbContext<AppDbContext>(options =>
                options.UseInMemoryDatabase("UserDb"));

            services.AddControllersWithViews();
            services.AddRazorPages();
        }

    }
}
