// Users.jsx
import React, { useState, useEffect } from "react";

function sampleUsers() {
  return [
    { id: 1, name: "Nguyen Van A", birthYear: 1990 },
    { id: 2, name: "Tran Thi B", birthYear: 1995 },
  ];
}

export default function UsersPage() {
  const [users, setUsers] = useState([]);
  const [openForm, setOpenForm] = useState(false);
  const [editUser, setEditUser] = useState(null);
  const [form, setForm] = useState({ name: "", birthYear: "" });

  useEffect(() => {
    // Thay bằng fetch('/api/users') khi có backend
    setUsers(sampleUsers());
  }, []);

  function openCreate() {
    setEditUser(null);
    setForm({ name: "", birthYear: "" });
    setOpenForm(true);
  }

  function openEdit(u) {
    setEditUser(u);
    setForm({ name: u.name, birthYear: u.birthYear });
    setOpenForm(true);
  }

  function save() {
    if (!form.name) return alert("Nhập tên");
    if (editUser) {
      setUsers(prev => prev.map(p => (p.id === editUser.id ? { ...p, ...form } : p)));
    } else {
      const next = { id: Date.now(), ...form };
      setUsers(prev => [next, ...prev]);
    }
    setOpenForm(false);
  }

  function remove(id) {
    if (!confirm("Xóa user này?")) return;
    setUsers(prev => prev.filter(u => u.id !== id));
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold">Users</h2>
        <button onClick={openCreate} className="px-3 py-1 bg-indigo-600 text-white rounded">Add User</button>
      </div>

      <div className="bg-white rounded shadow overflow-x-auto">
        <table className="min-w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="p-3 text-left">#</th>
              <th className="p-3 text-left">Name</th>
              <th className="p-3 text-left">Birth Year</th>
              <th className="p-3 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map(u => (
              <tr key={u.id} className="border-t">
                <td className="p-3">{u.id}</td>
                <td className="p-3">{u.name}</td>
                <td className="p-3">{u.birthYear}</td>
                <td className="p-3">
                  <button onClick={() => openEdit(u)} className="px-2 py-1 mr-2 border rounded">Edit</button>
                  <button onClick={() => remove(u.id)} className="px-2 py-1 border rounded text-red-600">Delete</button>
                </td>
              </tr>
            ))}
            {users.length === 0 && (
              <tr>
                <td colSpan={4} className="p-4 text-center text-gray-500">No users</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Modal form */}
      {openForm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div className="absolute inset-0 bg-black/40" onClick={() => setOpenForm(false)} />
          <div className="bg-white rounded p-6 z-10 w-full max-w-md">
            <h3 className="mb-4">{editUser ? "Edit User" : "Add User"}</h3>

            <div className="space-y-3">
              <div>
                <label className="text-sm">Name</label>
                <input
                  className="w-full border rounded px-3 py-2"
                  value={form.name}
                  onChange={(e) => setForm(f => ({ ...f, name: e.target.value }))}
                />
              </div>
              <div>
                <label className="text-sm">Birth Year</label>
                <input
                  className="w-full border rounded px-3 py-2"
                  value={form.birthYear}
                  onChange={(e) => setForm(f => ({ ...f, birthYear: e.target.value }))}
                />
              </div>
            </div>

            <div className="mt-4 flex justify-end gap-2">
              <button onClick={() => setOpenForm(false)} className="px-3 py-1 border rounded">Cancel</button>
              <button onClick={save} className="px-3 py-1 bg-indigo-600 text-white rounded">Save</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
