using Microsoft.EntityFrameworkCore;

namespace CRM.API.Business.Service.Data.Database
{
    public partial class ServiceContext(DbContextOptions<ServiceContext> options) : DbContext(options)
    {
        public virtual DbSet<CRM.Common.Database.Data.Store> Stores { get; set; }
        public virtual DbSet<CRM.Common.Database.Data.StoreService> StoreServices { get; set; }
        public virtual DbSet<CRM.Common.Database.Data.ServiceCategory> ServiceCategories { get; set; }
        public virtual DbSet<CRM.Common.Database.Data.ServiceSubCategory> ServiceSubCategories { get; set; }
        public virtual DbSet<CRM.Common.Database.Data.CategorizeStoreService> CategorizeStoreServices { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.HasAnnotation("Relational:Collation", "SQL_Latin1_General_CP1_CI_AS");

            modelBuilder.ApplyConfigurationsFromAssembly(typeof(CRM.Common.Database.Data.DatabaseContext).Assembly);

            OnModelCreatingPartial(modelBuilder);
        }


        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);

        public void RevertAllChangesInTheContext()
        {
            ChangeTracker.Entries()
                .Where(e => e.Entity != null).ToList()
                .ForEach(e => e.State = EntityState.Detached);
        }
    }
}