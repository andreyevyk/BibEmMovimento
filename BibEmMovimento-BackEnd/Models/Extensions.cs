using Microsoft.AspNetCore.Http;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;

namespace BibEmMovimento.Models
{
    public static class Extensions
    {
        public static byte[] ConvertToBytes(this IFormFile image)
        {
            if (image == null)
            {
                return null;
            }
            using (var inputStream = image.OpenReadStream())
            using (var stream = new MemoryStream())
            {
                inputStream.CopyTo(stream);
                return stream.ToArray();
            }
        }

    }
}
