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
    public class PersonPhoneController : ControllerBase
    {
        private readonly IConfiguration _configuration;

        public PersonPhoneController(IConfiguration configuration)
        {
            _configuration = configuration;
        }

        [HttpGet]
        public JsonResult get()
        {
            string query = @"
                        select * from dbo.PersonPhone";

            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("PhonePersonAppCon");
            SqlDataReader myReader;
            using(SqlConnection myCon = new SqlConnection(sqlDataSource))
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
        public JsonResult post(PersonPhoneModel personPhone)
        {
            string query = @"
                    insert into dbo.PersonPhone values
                    ('" + personPhone.businessEntityID + @", 
                     '" + personPhone.phoneNumber + @",
                     '" + personPhone.phoneNumberTypeID + @"')";

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
        public JsonResult put(PersonPhoneModel personPhone)
        {
            string query = @"
                    update dbo.PersonPhone set
                    ('" + personPhone.phoneNumber + @",
                     '" + personPhone.phoneNumberTypeID + @"
                     where businessEntityID = " + personPhone.businessEntityID;

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
                    delete from dbo.PersonPhone
                    where businessEntityID = " + id;

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

        [Route("GetAllDepartamentName")]
        public JsonResult getAllDepartamentNames()
        {
            string query = @"
                        select BusinessEntityID from dbo.PersonPhone";

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
    }
}
