using System;
namespace Example_Legacy_App.Models
{
    public class AngularTemplateViewModel
    {
        public string Module { get; set; }
        public string Template { get; set; }

        public AngularTemplateViewModel()
        {
            Module = "example";
            Template = "<ui-view></ui-view>";
        }

        public AngularTemplateViewModel(string module = "example", string template = "<ui-view></ui-view>")
        {
            Module = module;
            Template = template;
        }
    }
}
