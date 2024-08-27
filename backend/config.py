import os
import psycopg2
class Config:
    db_url = 'postgresql://postgres:sql@localhost:5432/Argus'

    def get_connection(self):
        con = psycopg2.connect(self.db_url)
        con.autocommit = True
        return con

    def create_UserInfo(self):
        with self.get_connection() as con:
            with con.cursor() as cur:
                cur.execute('''CREATE TABLE IF NOT EXISTS UserInfo (
                                id SERIAL PRIMARY KEY,
                                name VARCHAR(50),
                                phno BIGINT UNIQUE,
                                regno VARCHAR(255) UNIQUE) ''')
