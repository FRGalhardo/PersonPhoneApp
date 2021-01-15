using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using System.Data.SqlClient;
using System.Data;
using PersonPhone.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PersonPhone.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PhoneNumberTypeController : ControllerBase
    {

        private readonly IConfiguration _configuration;

        public PhoneNumberTypeController(IConfiguration configuration)
        {
            _configuration = configuration;
        }

        [HttpGet]
        public JsonResult get()
        {
            string query = @"
                        select * from dbo.PhoneNumberType";

            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("PhonePersonAppCon");
            SqlDataReader myReader;
            using (SqlConnection myCon = new SqlConnection(sqlDataSource))
            {
                myCon.Open();
                using (SqlCommand myCommand = new SqlCommand(query, myCon))
                {
                    myReader = myCommand.ExecuteReader();
                    table.Load(myReader);

                    myReader.Close();
                    if (myCon != null)
                    {
                        myCon.Close();
                    }
                }

                return new JsonResult(table);
            }
        }

        [HttpPost]
        public JsonResult post(PhoneNumberTypeModel  PhoneNumberType)
        {
            string query = @"
                    insert into dbo.PhoneNumberType values
                    ('" + PhoneNumberType.phoneNumberTypeID + @", 
                     '" + PhoneNumberType.name + "')";

            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("PhonePersonAppCon");
            SqlDataReader myReader;
            using (SqlConnection myCon = new SqlConnection(sqlDataSource))
            {
                myCon.Open();
                using (SqlCommand myCommand = new SqlCommand(query, myCon))
                {
                    myReader = myCommand.ExecuteReader();
                    table.Load(myReader);

                    myReader.Close();
                    if (myCon != null)
                    {
                        myCon.Close();
                    }
                }

                return new JsonResult("Added Successfully");
            }

        }

        [HttpPut]
        public JsonResult put(PhoneNumberTypeModel PhoneNumberType)
        {
            string query = @"
                    update dbo.PhoneNumberType set
                    ('" + PhoneNumberType.name + @"
                     where phoneNumberTypeID = " + PhoneNumberType.phoneNumberTypeID;

            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("PhonePersonAppCon");
            SqlDataReader myReader;
            using (SqlConnection myCon = new SqlConnection(sqlDataSource))
            {
                myCon.Open();
                using (SqlCommand myCommand = new SqlCommand(query, myCon))
                {
                    myReader = myCommand.ExecuteReader();
                    table.Load(myReader);

                    myReader.Close();
                    if (myCon != null)
                    {
                        myCon.Close();
                    }
                }

                return new JsonResult("Updated Successfully");
            }

        }

        [HttpDelete("{id}")]
        public JsonResult delete(int id)
        {
            string query = @"
                    delete from dbo.PhoneNumberType
                    where phoneNumberTypeID = " + id;

            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("PhonePersonAppCon");
            SqlDataReader myReader;
            using (SqlConnection myCon = new SqlConnection(sqlDataSource))
            {
                myCon.Open();
                using (SqlCommand myCommand = new SqlCommand(query, myCon))
                {
                    myReader = myCommand.ExecuteReader();
                    table.Load(myReader);

                    myReader.Close();
                    if (myCon != null)
                    {
                        myCon.Close();
                    }
                }

                return new JsonResult("Deleted Successfully");
            }

        }

    }
}
