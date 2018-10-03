using System;
using Microsoft.AspNetCore.Hosting;

namespace newApp
{
  class Program
  {
    static void Main(string[] args)
    {
      var host = new WebHostBuilder().UseKestrel().Configure(app => app.Run(context => context.Response.WriteAsync("hey")));

    }
  }
}
