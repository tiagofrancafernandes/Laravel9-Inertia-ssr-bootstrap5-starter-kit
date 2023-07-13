<template>
    <Head title="Roles Edit" />

    <breeze-authenticated-layout>
        <template #header>
            <h2 class="h4 font-weight-bold">Edit role</h2>
        </template>

        <div class="card shadow-sm">
            <div class="card-body">
                <form
                    @submit.prevent="form.put(route('roles.update', form.id))"
                >
                <!-- :action="route('roles.update', form.id)" -->
                    <!-- method="post" -->
                <!-- > -->
                    <!-- <input type="hidden" name="_method" value="put">
                    <input type="hidden" name="_token" :value="csrfToken"> -->

                    <div class="row mb-4">
                        <div class="col-2 pt-4">
                            <div class="form-check form-check-inline px-0 mt-2 pt-1">
                                <input
                                    type="checkbox"
                                    v-model="enableEditRoleName"
                                    id="enableEditRoleName"
                                    :checked="enableEditRoleName"
                                    :data-original-role-name="originalRoleName"
                                    v-on:change="toggleEnableEditRoleName"
                                >
                                    <label class="form-check-label px-1" for="enableEditRoleName">Enable edit role name</label>
                            </div>
                        </div>

                        <div class="col-10">
                            <div class="form-outline">
                                <label class="form-label" for="role_name"
                                    >Role name</label
                                >
                                <input
                                    type="text"
                                    name="role_name"
                                    id="role_name"
                                    class="form-control"
                                    v-model="form.role_name"
                                    :disabled="!enableEditRoleName"
                                />
                                <div class="text-danger">
                                    {{ errors.role_name }}
                                </div>
                            </div>
                        </div>
                    </div>

                    <label class="form-label" for="permission_list"
                        >Assign one/multiple permissions to this role:</label
                    >
                    <br />
                    <template
                        v-for="permission in permissions"
                        :key="permission.id"
                    >
                        <div class="form-check form-check-inline">
                            <!-- :name="`selectedPermissions[${permission.name}]`" -->
                            <input
                                type="checkbox"
                                :value="permission.name"
                                :name="`selectedPermissions[]`"
                                @change="togglePermission"
                                :id="`permission_${permission.id}`"
                                v-bind:checked="permission.checked"
                            />
                            <label
                                class="form-check-label px-1"
                                :for="`permission_${permission.id}`"
                                >{{ permission.name }}
                            </label>
                        </div>
                    </template>
                    <div class="text-danger">
                        {{ errors.selectedPermissions }}
                    </div>
                    <br />
                    <!-- Submit button -->
                    <button
                        type="submit"
                        :disabled="form.processing"
                        class="btn btn-primary btn-block my-4"
                    >
                        Update role
                    </button>
                </form>
            </div>
        </div>
    </breeze-authenticated-layout>
</template>

<script>
import BreezeAuthenticatedLayout from "@/Layouts/Authenticated.vue";
import { Head, Link, useForm } from "@inertiajs/inertia-vue3";
import { ref } from "vue";

export default {
    components: {
        BreezeAuthenticatedLayout,
        Head,
        Link,
    },
    props: {
        role: Object,
        grantedPermissionList: Object,
        allPermissions: Object,
        errors: Object,
        csrfToken: String,
    },
    methods: {
        toggleEnableEditRoleName(event) {
            let originalRoleName = event?.target?.dataset.originalRoleName ?? null;

            if (!originalRoleName) {
                return;
            }

            if (!this.enableEditRoleName) {
                this.form.role_name = originalRoleName;
            }
        },
        togglePermission(event) {
            let permissionName = event?.target?.value ?? null;
            let toAdd = event?.target?.checked;

            if (!toAdd) {
                this.form.selectedPermissions = this.form.selectedPermissions.filter(item => item != permissionName);
                return;
            }

            let alreadyExists = this.form.selectedPermissions.filter(item => item == permissionName).length;

            if (alreadyExists) {
                return;
            }

            this.form.selectedPermissions.push(permissionName);

            return;
        },
    },
    setup(props) {
        let form = useForm({
            id: props.role.id,
            role_name: props.role.name,
            selectedPermissions: [],
        });

        let permissions = ref([]);

        Object.entries(props.allPermissions)
            .forEach(item => {
                let [permissionId, permissionName] = item;
                permissions.value.push({
                    id: permissionId,
                    name: permissionName,
                    checked: Object.values(props.grantedPermissionList).includes(permissionName),
                });

                if (Object.values(props.grantedPermissionList).includes(permissionName)) {
                    form.selectedPermissions.push(permissionName);
                }
            });

        let enableEditRoleName = ref(false);
        let originalRoleName = props.role.name;

        return {
            form,
            permissions,
            enableEditRoleName,
            originalRoleName,
        };
    },
};
</script>
