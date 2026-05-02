# Data Stack Health Score — Client Onboarding Checklist

Thanks for booking a Data Stack Health Score audit. This checklist covers
everything I need from you to get started. Total time on your end: roughly
30 minutes.

Once all three sections below are done, reply to confirm and I will start
the audit. You will receive the report within five business days.

---

## 1. Snowflake access

Create a read-only role and user for the audit. Run the following SQL as
an ACCOUNTADMIN (or a role with MANAGE GRANTS privilege):

```sql
-- Create the audit role
CREATE ROLE IF NOT EXISTS UNCLEDATA_AUDIT;

-- Grant read access to account usage metadata
GRANT IMPORTED PRIVILEGES ON DATABASE SNOWFLAKE TO ROLE UNCLEDATA_AUDIT;

-- Grant warehouse metering history access (required for cost analysis)
GRANT MONITOR USAGE ON ACCOUNT TO ROLE UNCLEDATA_AUDIT;

-- Grant usage on your warehouses so query history is visible
-- Replace COMPUTE_WH with your warehouse name(s)
GRANT USAGE ON WAREHOUSE COMPUTE_WH TO ROLE UNCLEDATA_AUDIT;

-- Create the audit user
CREATE USER IF NOT EXISTS UNCLEDATA_AUDIT_USER
    PASSWORD = '<choose a strong password>'
    DEFAULT_ROLE = UNCLEDATA_AUDIT
    MUST_CHANGE_PASSWORD = FALSE;

GRANT ROLE UNCLEDATA_AUDIT TO USER UNCLEDATA_AUDIT_USER;
```

Then share with me:
- [ ] Snowflake account identifier (e.g. `xy12345.eu-west-1`)
- [ ] Username: `UNCLEDATA_AUDIT_USER`
- [ ] Password (send via a secure channel — use 1Password Share, a Signal message, or similar)

**What this grants:** Read-only access to `SNOWFLAKE.ACCOUNT_USAGE` views
(query history, warehouse usage, storage, access history). No access to
your actual data tables.

---

## 2. dbt project access

Grant me read-only access to your dbt project repository.

**If on GitHub:**
1. Go to your repo Settings → Collaborators
2. Add `tomaspeluritis` with Read access

**If on GitLab:**
1. Go to your project Settings → Members
2. Add `tomas.peluritis` with Reporter role

**If self-hosted or using a different setup:**
Export the project as a ZIP and share via Google Drive, Dropbox, or email.

Share with me:
- [ ] Repo URL (or ZIP file)
- [ ] Confirm access has been granted (or ZIP sent)

---

## 3. Airflow access

Choose whichever of these fits your setup:

**Option A — Airflow REST API (Airflow 2.0+, recommended)**

If your Airflow has the REST API enabled (most managed deployments do):

1. Create a read-only user in Airflow Admin → Users
2. Share the API base URL (e.g. `https://your-airflow.example.com/api/v1`)
3. Share the username and password for that user

Share with me:
- [ ] Airflow API URL
- [ ] Read-only username + password (secure channel)

**Option B — DAGs folder export**

If API access is not practical, export your DAGs folder as a ZIP:

```bash
zip -r dags.zip /path/to/your/dags/
```

Share the ZIP via Google Drive, Dropbox, or email.

Share with me:
- [ ] `dags.zip` file

**No Airflow?** Skip this section entirely — the audit will cover dbt and
Snowflake only.

---

## Config files

I will send you two pre-filled config files (`.snowcost.yml` and
`.stackcheck.yml`) once I have your Snowflake account identifier. You just
fill in the credentials and send them back. No other setup required on
your end.

---

## Questions?

Reply to this email or message me on LinkedIn. I aim to respond within
one business day.
