package com.MiPortfolio.FranciscoRuiz.Security.Repository;

import com.MiPortfolio.FranciscoRuiz.Security.Entity.Rol;
import com.MiPortfolio.FranciscoRuiz.Security.Enums.RolNombre;
import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface iRolRepository extends JpaRepository<Rol, Integer>{
    Optional<Rol> findByRolNombre (RolNombre rolNombre);
}
