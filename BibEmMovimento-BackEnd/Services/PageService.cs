using BibEmMovimento.Models;
using System.Linq;
using System.Collections.Generic;
using System.Text.RegularExpressions;

namespace BibEmMovimento.Models
{
    public interface IPageService
    {
        List<PageContent> GetPages(FilteringParams filteringParams);
    }
    public class PageService : IPageService
    {
        private readonly BibEmMovimentoContext _context;
        public PageService(BibEmMovimentoContext context)
        {
            _context = context;
        }
        public List<PageContent> GetPages(FilteringParams filteringParams)
        {
            List<PageContent> query = _context.PageContent.ToList();

            // var filterBy = filteringParams.FilterBy.Trim().ToLowerInvariant();
            if (filteringParams.FilterBy != "" && filteringParams.Search != "")
            {
                query = _context.PageContent
                    .Where(p => SearchObject(p, filteringParams)).ToList();
            }

            query = query.Skip(filteringParams.Skip).ToList();

            if (filteringParams.Limit != 0)
            {
                query = query.Take(filteringParams.Limit).ToList();
            }

            return query;
        }

        private bool SearchObject(PageContent p, FilteringParams _params)
        {
            bool response = false;

            switch (_params.FilterBy.ToLower())
            {
                case "page":
                    if (searchStr(p.Page.ToString(), _params.Search) ) response = true;
                    break;

                case "title":
                    if (searchStr(p.Title, _params.Search)) response = true;
                    break;

                case "content":
                    if (searchStr(p.Content, _params.Search)) response = true;
                    break;

                case "add_info":
                    if (searchStr(p.Add_Info, _params.Search)) response = true;
                    break;

                case "image_src":
                    if (searchStr(p.ImgCover_Src, _params.Search)) response = true;
                    break;
            }

            return response;
        }

        private bool searchStr(string value, string search)
        {
            return Regex.Match(value, search, RegexOptions.IgnoreCase).Success;
        }
    }
}