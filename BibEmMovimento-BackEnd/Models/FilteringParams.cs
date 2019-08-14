using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.InteropServices;

namespace BibEmMovimento.Models
{
    public class FilteringParams
    {
        public string FilterBy { get; set; } = "";
        public string Search { get; set; } = "";
        public int Limit { get; set; } = 0;
        public int Skip { get; set; } = 0;

        public FilteringParams (string filterBy, string search, int limit, int skip)
        {
            Limit = limit;
            FilterBy = filterBy;
            Search = search;
            Skip = skip;
        }

        public FilteringParams(string filterBy, string search)
        {
            FilterBy = filterBy;
            Search = search;
        }
    }
}
