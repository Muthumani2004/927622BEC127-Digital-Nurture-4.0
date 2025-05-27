package insert_and_update_operations_in_jdbc;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.SQLException;

public class StudentDAO {
    private Connection getConnection() throws SQLException, ClassNotFoundException {
        Class.forName("com.mysql.cj.jdbc.Driver"); // Ensure the driver is loaded
        return DriverManager.getConnection("jdbc:mysql://localhost:3306/school?useSSL=false&serverTimezone=UTC", "root",
                "Muthumani#2004");
    }

    public void insertStudent(int id, String name) throws SQLException, ClassNotFoundException {
        try (Connection conn = getConnection();
                PreparedStatement stmt = conn.prepareStatement("INSERT INTO students (id, name) VALUES (?, ?)")) {
            stmt.setInt(1, id);
            stmt.setString(2, name);
            stmt.executeUpdate();
        }
    }

    public void updateStudent(int id, String newName) throws SQLException, ClassNotFoundException {
        try (Connection conn = getConnection();
                PreparedStatement stmt = conn.prepareStatement("UPDATE students SET name=? WHERE id=?")) {
            stmt.setString(1, newName);
            stmt.setInt(2, id);
            stmt.executeUpdate();
        }
    }
}
