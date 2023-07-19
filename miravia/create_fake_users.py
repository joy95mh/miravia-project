import random
import sys
from faker import Faker
from bootstrap_table import app
import psycopg2

with app.app_context():
    def create_fake_users(n):
        """Generate fake users and insert them into the miravia.users table."""
        faker = Faker()
        conn = psycopg2.connect(
            host="192.168.101.236",
            port="5432",
            database="postgres",
            user="postgres",
            password="123456"
        )
        cur = conn.cursor()
        for i in range(n):
            name = faker.name()
            age = random.randint(20, 80)
            address = faker.address().replace('\n', ', ')
            phone = faker.phone_number()[:20]  # Truncate the phone number to fit within 20 characters
            email = faker.email()
            cur.execute(
                """
                INSERT INTO miravia.users (name, age, address, phone, email)
                VALUES (%s, %s, %s, %s, %s)
                """,
                (name, age, address, phone, email)
            )
        conn.commit()
        cur.close()
        conn.close()
        print(f'Added {n} fake users to the database.')

    if __name__ == '__main__':
        if len(sys.argv) <= 1:
            print('Pass the number of users you want to create as an argument.')
            sys.exit(1)
        create_fake_users(int(sys.argv[1]))