module.exports = {
    cardCategories: function () {
        return [
            {
                title: 'FILES', items: [
                    {title: 'File manager', icon: 'icon-file_manager'},
                    {title: 'Images', icon: 'icon-images'},
                    {title: 'Directory Privacy', icon: 'icon-directory_privacy'},
                    {title: 'Disk Usage', icon: 'icon-disk_usage'},
                    {title: 'Web Disk', icon: 'icon-web_disk'},
                    {title: 'FTP Accounts', icon: 'icon-ftp_accounts'},
                    {title: 'FTP Connections', icon: 'icon-ftp_connections'},
                    {title: 'Backup', icon: 'icon-backup'},
                    {title: 'Backup Wizard', icon: 'icon-backup_wizard'},
                    {title: 'Git Version Control', icon: 'icon-version_control'},
                ]
            }, {
                title: 'DATABASES', items: [
                    {title: 'phpMyAdmin', icon: 'icon-php_my_admin'},
                    {title: 'MySQL Databases', icon: 'icon-mysql_databases'},
                    {title: 'MySQL Database Wizard', icon: 'icon-mysql_database_wizard'},
                    {title: 'Remote MySQL', icon: 'icon-remote_mysql'},
                    {title: 'PostgreSQL Databases', icon: 'icon-postgresql_databases'},
                    {title: 'PostreSQL Database Wizard', icon: 'icon-postgresql_database_wizard'},
                    {title: 'phpPgAdmin', icon: 'icon-php_pg_admin'},
                ]
            }, {
                title: 'DOMAINS', items: [
                    {title: 'Site Publisher', icon: 'icon-site_publisher'},
                    {title: 'Domains', icon: 'icon-domains'},
                    {title: 'Addon Domains', icon: 'icon-addon_domains'},
                    {title: 'Subdomains', icon: 'icon-subdomains'},
                    {title: 'Aliases', icon: 'icon-aliases'},
                    {title: 'Redirects', icon: 'icon-redirects'},
                    {title: 'Zone Editor', icon: 'icon-zone_editor'}
                ]
            }, {
                title: 'EMAILS', items: [
                    {title: 'Email Accounts', icon: 'icon-email_accounts'},
                    {title: 'Forwarders', icon: 'icon-forwarders'},
                    {title: 'Email Routing', icon: 'icon-email_routing'},
                    {title: 'Autoresponders', icon: 'icon-autoresponders'},
                    {title: 'Default Address', icon: 'icon-default_address'},
                    {title: 'Mailing Lists', icon: 'icon-mailing_lists'},
                    {title: 'Track Delivery', icon: 'icon-track_delivery'},
                    {title: 'Global Email Filters', icon: 'icon-global_email_filters'},
                    {title: 'Email Filters', icon: 'icon-email_filters'},
                    {title: 'Email Deliverability', icon: 'icon-email_deliverability'},
                    {title: 'Address Importer', icon: 'icon-address_importer'},
                    {title: 'Spam Filters', icon: 'icon-apache_spam_assassin'},
                    {title: 'Encryption', icon: 'icon-encryption'},
                    {title: 'Boxtrapper', icon: 'icon-boxtrapper'},
                    {title: 'Configure Greylisting', icon: 'icon-greylisting'},
                    {title: 'Calendars and Contacts', icon: 'icon-calendar_and_contacts'},
                    {title: 'Email Disk Usage', icon: 'icon-email_disk_usage'},
                ]
            }, {
                title: 'METRICS', items: [
                    {title: 'Visitors', icon: 'icon-visitors'},
                    {title: 'Errors', icon: 'icon-errors'},
                    {title: 'Bandwidth', icon: 'icon-bandwidth'},
                    {title: 'Raw Access', icon: 'icon-raw_access'},
                    {title: 'Awstats', icon: 'icon-awstats'},
                    {title: 'Analog Stats', icon: 'icon-analog_stats'},
                    {title: 'Webalizer', icon: 'icon-webalizer'},
                    {title: 'Webalizer FTP', icon: 'icon-webalizer_ftp'},
                    {title: 'Metrics Editor', icon: 'icon-metrics_editor'}
                ]
            }, {
                title: 'SECURITY', items: [
                    {title: 'SSH Access', icon: 'icon-ssh_access'},
                    {title: 'IP Blocker', icon: 'icon-ip_blocker'},
                    {title: 'SSL/TLS', icon: 'icon-ssl_tls'},
                    {title: 'Manage API Tokens', icon: 'icon-api_tokens'},
                    {title: 'Hotlink Protection', icon: 'icon-hotlink_protection'},
                    {title: 'Leech Protection', icon: 'icon-leech_protection'},
                    {title: 'ModSecurity', icon: 'icon-mod_security'},
                    {title: 'SSL/TLS Status', icon: 'icon-tls_status'},
                    {title: 'Two-Factor Authentication', icon: 'icon-two_factor_authentication'},
                ]
            }, {
                title: 'SOFTWARE', items: [
                    {title: 'Cloudflare', icon: 'icon-cloudflare'},
                    {title: 'PHP PEARL Packages', icon: 'icon-php_pear_packages'},
                    {title: 'Perl Modules', icon: 'icon-perl_modules'},
                    {title: 'Site Software', icon: 'icon-site_software'},
                    {title: 'Optimize Website', icon: 'icon-optimize_website'},
                    {title: 'MultiPHP Manager', icon: 'icon-multiphp_manager'},
                    {title: 'MultiPHP INI Editor', icon: 'icon-multiphp_ini_editor'},
                ]
            }, {
                title: 'ADVANCED', items: [
                    {title: 'Cron Jobs', icon: 'icon-cron_jobs'},
                    {title: 'Track DNS', icon: 'icon-track_dns'},
                    {title: 'Indexes', icon: 'icon-indexes'},
                    {title: 'Error Pages', icon: 'icon-error_pages'},
                    {title: 'Apache Handlers', icon: 'icon-apache_handlers'},
                    {title: 'MIME Types', icon: 'icon-mime_types'},
                ]
            }, {
                title: 'PREFERENCES', items: [
                    {title: 'Password & Security', icon: 'icon-change_password'},
                    {title: 'Change Language', icon: 'icon-change_language'},
                    {title: 'Change Style', icon: 'icon-change_style'},
                    {title: 'Contact Information', icon: 'icon-contact_information'},
                    {title: 'User Manager', icon: 'icon-user_manager'},
                ]
            }
        ]
    },
    sideCardCategories: function () {
        return {
            'general_information': [
                {title: 'Current User', key: 'current_user'},
                {title: 'Primary Domain (DV Certificate)', key: 'primary_domain'},
                {title: 'Shared IP Address', key: 'shared_ip_address'},
                {title: 'Home Directory', key: 'home_directory'},
                {title: 'Last Login IP Address', key: 'last_login_ip'},
            ], 'statistics': [
                {title: 'Disk Usage', key: 'disk_usage'},
                {title: 'MySQL Disk Usage', key: 'mysql_disk_usage'},
                {title: 'PostgreSQL Disk Usage', key: 'postgresql_disk_usage'},
                {title: 'Bandwidth', key: 'bandwidth'},
                {title: 'Addon Domains', key: 'addon_domains'},
                {title: 'Subdomains', key: 'subdomains'},
                {title: 'Aliases', key: 'aliases'},
                {title: 'Email Accounts', key: 'email_accounts'},
                {title: 'Mailing Lists', key: 'mailing_lists'},
                {title: 'Autoresponders', key: 'autoresponders'},
                {title: 'Forwarders', key: 'forwarders'},
                {title: 'Email filters', key: 'email_filters'},
                {title: 'FTP Accounts', key: 'ftp_accounts'},
                {title: 'MySQL Databases', key: 'mysql_databases'},
                {title: 'PostgreSQL Databases', key: 'postgresql_databases'},
                {title: 'CPU Usage', key: 'cpu_usage'},
                {title: 'Entry Processes', key: 'entry_processes'},
                {title: 'Physical Memory Usage', key: 'physical_memory_usage'},
                {title: 'IOPS', key: 'iops'},
                {title: 'I/O Usage', key: 'i_o_usage'},
                {title: 'Number of Processes', key: 'number_of_processes'},
            ]
        }
    }
}
